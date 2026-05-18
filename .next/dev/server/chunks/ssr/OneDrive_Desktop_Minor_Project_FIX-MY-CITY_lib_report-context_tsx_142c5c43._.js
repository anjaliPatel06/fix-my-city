module.exports = [
"[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/report-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportProvider",
    ()=>ReportProvider,
    "useReport",
    ()=>useReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ReportContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ReportProvider({ children }) {
    const [reportData, setReportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const updateReportData = (data)=>{
        setReportData((prev)=>({
                ...prev,
                ...data
            }));
    };
    const resetReport = ()=>{
        setReportData({});
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportContext.Provider, {
        value: {
            reportData,
            updateReportData,
            resetReport
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Minor_Project/FIX-MY-CITY/lib/report-context.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function useReport() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Minor_Project$2f$FIX$2d$MY$2d$CITY$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ReportContext);
    if (undefined === context) {
        throw new Error("useReport must be used within ReportProvider");
    }
    return context;
}
}),
];

//# sourceMappingURL=OneDrive_Desktop_Minor_Project_FIX-MY-CITY_lib_report-context_tsx_142c5c43._.js.map