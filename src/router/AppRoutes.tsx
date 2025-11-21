import { Routes, Route } from 'react-router-dom';
import { MinimalView } from '../views/MinimalView';
import { GamifiedView } from '../views/GamifiedView';
import { DashboardView } from '../views/DashboardView';
import { useRateLimiter } from '../hooks/useRateLimiter';

export const AppRoutes = () => {
    const viewProps = useRateLimiter(); 
    
    return (
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden relative" style={{ minHeight: '500px' }}>
            <Routes> 
                <Route path="/" element={<MinimalView {...viewProps} />} />
                <Route path="/minimal" element={<MinimalView {...viewProps} />} />
                <Route path="/game" element={<GamifiedView {...viewProps} />} />
                <Route path="/dashboard" element={<DashboardView {...viewProps} />} />
                <Route path="*" element={<p>404 | Vista no encontrada</p>} />
            </Routes>
        </main>
    );
};