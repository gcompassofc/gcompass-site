'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, Trophy } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_SPEED = 150;

export default function NotFound() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    // Ensure food doesn't spawn on snake
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    setFood(generateFood());
    setGameStarted(true);
  };

  const moveSnake = useCallback(() => {
    if (isGameOver || !gameStarted) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y,
      };

      // Check collisions
      if (
        newHead.x < 0 || newHead.x >= GRID_SIZE ||
        newHead.y < 0 || newHead.y >= GRID_SIZE ||
        prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        setIsGameOver(true);
        if (score > highScore) setHighScore(score);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check if food eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameStarted, isGameOver, score, highScore, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
      if (!gameStarted && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        setGameStarted(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameStarted]);

  useEffect(() => {
    const interval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(interval);
  }, [moveSnake]);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="z-10 w-full max-w-2xl text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-black mb-4 opacity-10">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-lg leading-tight">
          Parece que você está no lugar errado, mas já que está aqui quer <span className="text-purple-500">jogar um jogo?</span>
        </h2>

        {/* Game Container */}
        <div 
          className="relative glass rounded-3xl p-4 md:p-8 shadow-2xl border border-white/10 mb-8 w-fit"
          ref={gameRef}
        >
          {/* Game Stats */}
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-sm font-medium text-white/60">Score: {score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-white/60">Best: {highScore}</span>
            </div>
          </div>

          {/* Canvas-like Grid */}
          <div 
            className="grid bg-black/40 rounded-xl overflow-hidden border border-white/5"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              width: 'min(80vw, 400px)',
              height: 'min(80vw, 400px)'
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              const isSnakeHead = snake[0].x === x && snake[0].y === y;
              const isSnakeBody = snake.slice(1).some(s => s.x === x && s.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div 
                  key={i} 
                  className={`transition-all duration-200 ${
                    isSnakeHead ? 'bg-purple-500 scale-100 rounded-[2px]' : 
                    isSnakeBody ? 'bg-purple-500/60 scale-90 rounded-[2px]' : 
                    isFood ? 'bg-blue-400 animate-pulse scale-75 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 
                    ''
                  }`}
                />
              );
            })}
          </div>

          {/* Game Over Overlay */}
          {isGameOver && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
              <p className="text-white/60 mb-6">Você fez {score} pontos.</p>
              <button 
                onClick={resetGame}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                <RefreshCw className="w-5 h-5" />
                Tentar de novo
              </button>
            </div>
          )}

          {/* Start Overlay */}
          {!gameStarted && !isGameOver && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <p className="text-white/80 font-medium mb-4">Use as setas do teclado para começar</p>
              <div className="grid grid-cols-3 gap-2 opacity-50 scale-75">
                <div />
                <div className="w-10 h-10 border border-white rounded flex items-center justify-center">↑</div>
                <div />
                <div className="w-10 h-10 border border-white rounded flex items-center justify-center">←</div>
                <div className="w-10 h-10 border border-white rounded flex items-center justify-center">↓</div>
                <div className="w-10 h-10 border border-white rounded flex items-center justify-center">→</div>
              </div>
            </div>
          )}
        </div>

        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para o início
        </Link>
      </div>

      <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </main>
  );
}
