# Kataw parser test case

## Input

`````js
class LanguageSpec_section_4_5_error_cases {
    public set AnnotatedSetter_SetterFirst(a: number) { }
    public get AnnotatedSetter_SetterFirst() { return ""; }

    public get AnnotatedSetter_SetterLast() { return ""; }
    public set AnnotatedSetter_SetterLast(a: number) { }

    public get AnnotatedGetter_GetterFirst(): string { return ""; }
    public set AnnotatedGetter_GetterFirst(aStr) { aStr = 0; }

    public set AnnotatedGetter_GetterLast(aStr) { aStr = 0; }
    public get AnnotatedGetter_GetterLast(): string { return ""; }
}

//// [accessors_spec_section-4.5_error-cases.js]
var LanguageSpec_section_4_5_error_cases = (function () {
    function LanguageSpec_section_4_5_error_cases() {
    }
    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, "AnnotatedSetter_SetterFirst", {
        get: function () { return ""; },
        set: function (a) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, "AnnotatedSetter_SetterLast", {
        get: function () { return ""; },
        set: function (a) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, "AnnotatedGetter_GetterFirst", {
        get: function () { return ""; },
        set: function (aStr) { aStr = 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, "AnnotatedGetter_GetterLast", {
        get: function () { return ""; },
        set: function (aStr) { aStr = 0; },
        enumerable: true,
        configurable: true
    });
    return LanguageSpec_section_4_5_error_cases;
})();
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class LanguageSpec_section_4_5_error_cases {\n    public set AnnotatedSetter_SetterFirst(a: number) { }\n    public get AnnotatedSetter_SetterFirst() { return \"\"; }\n\n    public get AnnotatedSetter_SetterLast() { return \"\"; }\n    public set AnnotatedSetter_SetterLast(a: number) { }\n\n    public get AnnotatedGetter_GetterFirst(): string { return \"\"; }\n    public set AnnotatedGetter_GetterFirst(aStr) { aStr = 0; }\n\n    public set AnnotatedGetter_GetterLast(aStr) { aStr = 0; }\n    public get AnnotatedGetter_GetterLast(): string { return \"\"; }\n}\n\n//// [accessors_spec_section-4.5_error-cases.js]\nvar LanguageSpec_section_4_5_error_cases = (function () {\n    function LanguageSpec_section_4_5_error_cases() {\n    }\n    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, \"AnnotatedSetter_SetterFirst\", {\n        get: function () { return \"\"; },\n        set: function (a) { },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, \"AnnotatedSetter_SetterLast\", {\n        get: function () { return \"\"; },\n        set: function (a) { },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, \"AnnotatedGetter_GetterFirst\", {\n        get: function () { return \"\"; },\n        set: function (aStr) { aStr = 0; },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(LanguageSpec_section_4_5_error_cases.prototype, \"AnnotatedGetter_GetterLast\", {\n        get: function () { return \"\"; },\n        set: function (aStr) { aStr = 0; },\n        enumerable: true,\n        configurable: true\n    });\n    return LanguageSpec_section_4_5_error_cases;\n})();",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "LanguageSpec_section_4_5_error_cases",
                "rawText": "LanguageSpec_section_4_5_error_cases",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 42
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedSetter_SetterFirst",
                                "rawText": "AnnotatedSetter_SetterFirst",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 87
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 88,
                                            "end": 89
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 90,
                                            "end": 97
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 88,
                                        "end": 97
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 88,
                                "end": 98
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 100,
                                    "end": 100
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 98,
                                "end": 102
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 44,
                                "end": 55
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 87,
                            "end": 102
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 44,
                        "end": 102
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedSetter_SetterFirst",
                                "rawText": "AnnotatedSetter_SetterFirst",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 117,
                                "end": 145
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 146,
                                "end": 147
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 156,
                                                "end": 159
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 149,
                                            "end": 160
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 149,
                                    "end": 160
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 147,
                                "end": 162
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 102,
                                "end": 113
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 145,
                            "end": 162
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 102,
                        "end": 162
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedSetter_SetterLast",
                                "rawText": "AnnotatedSetter_SetterLast",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 178,
                                "end": 205
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 206,
                                "end": 207
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 219
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 209,
                                            "end": 220
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 209,
                                    "end": 220
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 222
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 162,
                                "end": 174
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 205,
                            "end": 222
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 162,
                        "end": 222
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedSetter_SetterLast",
                                "rawText": "AnnotatedSetter_SetterLast",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 264
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 265,
                                            "end": 266
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 267,
                                            "end": 274
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 265,
                                        "end": 274
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 265,
                                "end": 275
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 277,
                                    "end": 277
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 275,
                                "end": 279
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 222,
                                "end": 233
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 264,
                            "end": 279
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 222,
                        "end": 279
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedGetter_GetterFirst",
                                "rawText": "AnnotatedGetter_GetterFirst",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 295,
                                "end": 323
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 324,
                                "end": 325
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 342,
                                                "end": 345
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 335,
                                            "end": 346
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 335,
                                    "end": 346
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 333,
                                "end": 348
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 326,
                                "end": 333
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 279,
                                "end": 291
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 323,
                            "end": 348
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 279,
                        "end": 348
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedGetter_GetterFirst",
                                "rawText": "AnnotatedGetter_GetterFirst",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 363,
                                "end": 391
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "aStr",
                                            "rawText": "aStr",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 392,
                                            "end": 396
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 392,
                                        "end": 396
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 392,
                                "end": 397
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "aStr",
                                                    "rawText": "aStr",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 399,
                                                    "end": 404
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 406,
                                                    "end": 408
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 399,
                                                "end": 408
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 399,
                                            "end": 409
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 399,
                                    "end": 409
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 397,
                                "end": 411
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 348,
                                "end": 359
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 391,
                            "end": 411
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 348,
                        "end": 411
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedGetter_GetterLast",
                                "rawText": "AnnotatedGetter_GetterLast",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 427,
                                "end": 454
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "aStr",
                                            "rawText": "aStr",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 455,
                                            "end": 459
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 455,
                                        "end": 459
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 455,
                                "end": 460
                            },
                            "isSetter": true,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 65550,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "aStr",
                                                    "rawText": "aStr",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 462,
                                                    "end": 467
                                                },
                                                "operator": "=",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 469,
                                                    "end": 471
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 462,
                                                "end": 471
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 462,
                                            "end": 472
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 462,
                                    "end": 472
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 460,
                                "end": 474
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 411,
                                "end": 423
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 454,
                            "end": 474
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 411,
                        "end": 474
                    },
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "AnnotatedGetter_GetterLast",
                                "rawText": "AnnotatedGetter_GetterLast",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 489,
                                "end": 516
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 517,
                                "end": 518
                            },
                            "isSetter": false,
                            "isGetter": true,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 4261583,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 535,
                                                "end": 538
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 528,
                                            "end": 539
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 528,
                                    "end": 539
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 526,
                                "end": 541
                            },
                            "decorators": null,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 519,
                                "end": 526
                            },
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 474,
                                "end": 485
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 516,
                            "end": 541
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 474,
                        "end": 541
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 44,
                "end": 543
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 543
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "LanguageSpec_section_4_5_error_cases",
                            "rawText": "LanguageSpec_section_4_5_error_cases",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 597,
                            "end": 634
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 1073807915,
                            "expression": {
                                "kind": 66224,
                                "expression": {
                                    "kind": 8456285,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 648,
                                        "end": 649
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 264284,
                                                    "name": {
                                                        "kind": 131102,
                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1025,
                                                        "start": 664,
                                                        "end": 701
                                                    },
                                                    "formalParameters": {
                                                        "kind": 90,
                                                        "formalParameterList": [],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 702,
                                                        "end": 703
                                                    },
                                                    "type": null,
                                                    "contents": {
                                                        "kind": 91,
                                                        "functionStatementList": {
                                                            "kind": 94,
                                                            "statements": [],
                                                            "multiline": true,
                                                            "flags": 32768,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 705,
                                                            "end": 705
                                                        },
                                                        "flags": 32768,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 703,
                                                        "end": 711
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32768,
                                                    "intersects": false,
                                                    "transformFlags": 256,
                                                    "start": 651,
                                                    "end": 711
                                                },
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 1073807915,
                                                        "expression": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 711,
                                                                "end": 722
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "defineProperty",
                                                                "rawText": "defineProperty",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 723,
                                                                "end": 737
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 722,
                                                            "end": 737,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 722,
                                                                "end": 723
                                                            }
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 738,
                                                                        "end": 774
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "prototype",
                                                                        "rawText": "prototype",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 775,
                                                                        "end": 784
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 774,
                                                                    "end": 784,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 774,
                                                                        "end": 775
                                                                    }
                                                                },
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "AnnotatedSetter_SetterFirst",
                                                                    "rawText": "AnnotatedSetter_SetterFirst",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 785,
                                                                    "end": 815
                                                                },
                                                                {
                                                                    "kind": 98984,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "get",
                                                                                    "rawText": "get",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 818,
                                                                                    "end": 830
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 842,
                                                                                        "end": 843
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097346,
                                                                                                    "expression": {
                                                                                                        "kind": 4261583,
                                                                                                        "text": "",
                                                                                                        "rawText": "",
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 852,
                                                                                                        "end": 855
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 845,
                                                                                                    "end": 856
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 845,
                                                                                            "end": 856
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 843,
                                                                                        "end": 858
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 831,
                                                                                    "end": 858
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 818,
                                                                                "end": 858
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "set",
                                                                                    "rawText": "set",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 859,
                                                                                    "end": 871
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 131102,
                                                                                                    "text": "a",
                                                                                                    "rawText": "a",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 1025,
                                                                                                    "start": 883,
                                                                                                    "end": 884
                                                                                                },
                                                                                                "isOptional": false,
                                                                                                "type": null,
                                                                                                "initializer": null,
                                                                                                "decorators": null,
                                                                                                "accessModifier": null,
                                                                                                "isReadOnly": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1,
                                                                                                "start": 883,
                                                                                                "end": 884
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 883,
                                                                                        "end": 885
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 887,
                                                                                            "end": 887
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 885,
                                                                                        "end": 889
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 872,
                                                                                    "end": 889
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 859,
                                                                                "end": 889
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "enumerable",
                                                                                    "rawText": "enumerable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 890,
                                                                                    "end": 909
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 910,
                                                                                    "end": 915
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 890,
                                                                                "end": 915
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "configurable",
                                                                                    "rawText": "configurable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 916,
                                                                                    "end": 937
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 938,
                                                                                    "end": 943
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 32768,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 916,
                                                                                "end": 943
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 818,
                                                                        "end": 943
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 816,
                                                                    "end": 949
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 774,
                                                            "end": 950
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 737,
                                                        "end": 950
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 711,
                                                    "end": 951
                                                },
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 1073807915,
                                                        "expression": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 951,
                                                                "end": 962
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "defineProperty",
                                                                "rawText": "defineProperty",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 963,
                                                                "end": 977
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 962,
                                                            "end": 977,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 962,
                                                                "end": 963
                                                            }
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 978,
                                                                        "end": 1014
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "prototype",
                                                                        "rawText": "prototype",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1015,
                                                                        "end": 1024
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1014,
                                                                    "end": 1024,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 1014,
                                                                        "end": 1015
                                                                    }
                                                                },
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "AnnotatedSetter_SetterLast",
                                                                    "rawText": "AnnotatedSetter_SetterLast",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1025,
                                                                    "end": 1054
                                                                },
                                                                {
                                                                    "kind": 98984,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "get",
                                                                                    "rawText": "get",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1057,
                                                                                    "end": 1069
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1081,
                                                                                        "end": 1082
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097346,
                                                                                                    "expression": {
                                                                                                        "kind": 4261583,
                                                                                                        "text": "",
                                                                                                        "rawText": "",
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1091,
                                                                                                        "end": 1094
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1084,
                                                                                                    "end": 1095
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1084,
                                                                                            "end": 1095
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1082,
                                                                                        "end": 1097
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1070,
                                                                                    "end": 1097
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1057,
                                                                                "end": 1097
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "set",
                                                                                    "rawText": "set",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1098,
                                                                                    "end": 1110
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 131102,
                                                                                                    "text": "a",
                                                                                                    "rawText": "a",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 1025,
                                                                                                    "start": 1122,
                                                                                                    "end": 1123
                                                                                                },
                                                                                                "isOptional": false,
                                                                                                "type": null,
                                                                                                "initializer": null,
                                                                                                "decorators": null,
                                                                                                "accessModifier": null,
                                                                                                "isReadOnly": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1,
                                                                                                "start": 1122,
                                                                                                "end": 1123
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1122,
                                                                                        "end": 1124
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1126,
                                                                                            "end": 1126
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1124,
                                                                                        "end": 1128
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1111,
                                                                                    "end": 1128
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1098,
                                                                                "end": 1128
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "enumerable",
                                                                                    "rawText": "enumerable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1129,
                                                                                    "end": 1148
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1149,
                                                                                    "end": 1154
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1129,
                                                                                "end": 1154
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "configurable",
                                                                                    "rawText": "configurable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1155,
                                                                                    "end": 1176
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1177,
                                                                                    "end": 1182
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 32768,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1155,
                                                                                "end": 1182
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1057,
                                                                        "end": 1182
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1055,
                                                                    "end": 1188
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 1014,
                                                            "end": 1189
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 977,
                                                        "end": 1189
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 951,
                                                    "end": 1190
                                                },
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 1073807915,
                                                        "expression": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1190,
                                                                "end": 1201
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "defineProperty",
                                                                "rawText": "defineProperty",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1202,
                                                                "end": 1216
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 1201,
                                                            "end": 1216,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 1201,
                                                                "end": 1202
                                                            }
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1217,
                                                                        "end": 1253
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "prototype",
                                                                        "rawText": "prototype",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1254,
                                                                        "end": 1263
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1253,
                                                                    "end": 1263,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 1253,
                                                                        "end": 1254
                                                                    }
                                                                },
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "AnnotatedGetter_GetterFirst",
                                                                    "rawText": "AnnotatedGetter_GetterFirst",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1264,
                                                                    "end": 1294
                                                                },
                                                                {
                                                                    "kind": 98984,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "get",
                                                                                    "rawText": "get",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1297,
                                                                                    "end": 1309
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1321,
                                                                                        "end": 1322
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097346,
                                                                                                    "expression": {
                                                                                                        "kind": 4261583,
                                                                                                        "text": "",
                                                                                                        "rawText": "",
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1331,
                                                                                                        "end": 1334
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1324,
                                                                                                    "end": 1335
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1324,
                                                                                            "end": 1335
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1322,
                                                                                        "end": 1337
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1310,
                                                                                    "end": 1337
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1297,
                                                                                "end": 1337
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "set",
                                                                                    "rawText": "set",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1338,
                                                                                    "end": 1350
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 131102,
                                                                                                    "text": "aStr",
                                                                                                    "rawText": "aStr",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 1025,
                                                                                                    "start": 1362,
                                                                                                    "end": 1366
                                                                                                },
                                                                                                "isOptional": false,
                                                                                                "type": null,
                                                                                                "initializer": null,
                                                                                                "decorators": null,
                                                                                                "accessModifier": null,
                                                                                                "isReadOnly": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1,
                                                                                                "start": 1362,
                                                                                                "end": 1366
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1362,
                                                                                        "end": 1367
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097233,
                                                                                                    "expression": {
                                                                                                        "kind": 65550,
                                                                                                        "left": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "aStr",
                                                                                                            "rawText": "aStr",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1369,
                                                                                                            "end": 1374
                                                                                                        },
                                                                                                        "operator": "=",
                                                                                                        "right": {
                                                                                                            "kind": 4261540,
                                                                                                            "text": 0,
                                                                                                            "rawText": "0",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1376,
                                                                                                            "end": 1378
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1369,
                                                                                                        "end": 1378
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1369,
                                                                                                    "end": 1379
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1369,
                                                                                            "end": 1379
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1367,
                                                                                        "end": 1381
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1351,
                                                                                    "end": 1381
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1338,
                                                                                "end": 1381
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "enumerable",
                                                                                    "rawText": "enumerable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1382,
                                                                                    "end": 1401
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1402,
                                                                                    "end": 1407
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1382,
                                                                                "end": 1407
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "configurable",
                                                                                    "rawText": "configurable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1408,
                                                                                    "end": 1429
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1430,
                                                                                    "end": 1435
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 32768,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1408,
                                                                                "end": 1435
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1297,
                                                                        "end": 1435
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1295,
                                                                    "end": 1441
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 1253,
                                                            "end": 1442
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1216,
                                                        "end": 1442
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1190,
                                                    "end": 1443
                                                },
                                                {
                                                    "kind": 2097233,
                                                    "expression": {
                                                        "kind": 1073807915,
                                                        "expression": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 196712,
                                                                "text": "Object",
                                                                "rawText": "Object",
                                                                "flags": 32768,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1443,
                                                                "end": 1454
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "defineProperty",
                                                                "rawText": "defineProperty",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 1455,
                                                                "end": 1469
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 1454,
                                                            "end": 1469,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 1454,
                                                                "end": 1455
                                                            }
                                                        },
                                                        "typeArguments": null,
                                                        "argumentList": {
                                                            "kind": 3,
                                                            "elements": [
                                                                {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 196712,
                                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1470,
                                                                        "end": 1506
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "prototype",
                                                                        "rawText": "prototype",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1507,
                                                                        "end": 1516
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1506,
                                                                    "end": 1516,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 1506,
                                                                        "end": 1507
                                                                    }
                                                                },
                                                                {
                                                                    "kind": 4261583,
                                                                    "text": "AnnotatedGetter_GetterLast",
                                                                    "rawText": "AnnotatedGetter_GetterLast",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1517,
                                                                    "end": 1546
                                                                },
                                                                {
                                                                    "kind": 98984,
                                                                    "propertyList": {
                                                                        "kind": 65722,
                                                                        "properties": [
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "get",
                                                                                    "rawText": "get",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1549,
                                                                                    "end": 1561
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1573,
                                                                                        "end": 1574
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097346,
                                                                                                    "expression": {
                                                                                                        "kind": 4261583,
                                                                                                        "text": "",
                                                                                                        "rawText": "",
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1583,
                                                                                                        "end": 1586
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1576,
                                                                                                    "end": 1587
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1576,
                                                                                            "end": 1587
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1574,
                                                                                        "end": 1589
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1562,
                                                                                    "end": 1589
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1549,
                                                                                "end": 1589
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "set",
                                                                                    "rawText": "set",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1590,
                                                                                    "end": 1602
                                                                                },
                                                                                "right": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [
                                                                                            {
                                                                                                "kind": 16473,
                                                                                                "ellipsis": false,
                                                                                                "binding": {
                                                                                                    "kind": 131102,
                                                                                                    "text": "aStr",
                                                                                                    "rawText": "aStr",
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 1025,
                                                                                                    "start": 1614,
                                                                                                    "end": 1618
                                                                                                },
                                                                                                "isOptional": false,
                                                                                                "type": null,
                                                                                                "initializer": null,
                                                                                                "decorators": null,
                                                                                                "accessModifier": null,
                                                                                                "isReadOnly": false,
                                                                                                "flags": 0,
                                                                                                "intersects": false,
                                                                                                "transformFlags": 1,
                                                                                                "start": 1614,
                                                                                                "end": 1618
                                                                                            }
                                                                                        ],
                                                                                        "trailingComma": false,
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1614,
                                                                                        "end": 1619
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [
                                                                                                {
                                                                                                    "kind": 2097233,
                                                                                                    "expression": {
                                                                                                        "kind": 65550,
                                                                                                        "left": {
                                                                                                            "kind": 196712,
                                                                                                            "text": "aStr",
                                                                                                            "rawText": "aStr",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1621,
                                                                                                            "end": 1626
                                                                                                        },
                                                                                                        "operator": "=",
                                                                                                        "right": {
                                                                                                            "kind": 4261540,
                                                                                                            "text": 0,
                                                                                                            "rawText": "0",
                                                                                                            "flags": 0,
                                                                                                            "intersects": false,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 1628,
                                                                                                            "end": 1630
                                                                                                        },
                                                                                                        "flags": 0,
                                                                                                        "intersects": false,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 1621,
                                                                                                        "end": 1630
                                                                                                    },
                                                                                                    "flags": 0,
                                                                                                    "intersects": false,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 1621,
                                                                                                    "end": 1631
                                                                                                }
                                                                                            ],
                                                                                            "multiline": false,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "start": 1621,
                                                                                            "end": 1631
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "start": 1619,
                                                                                        "end": 1633
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1603,
                                                                                    "end": 1633
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1590,
                                                                                "end": 1633
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "enumerable",
                                                                                    "rawText": "enumerable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1634,
                                                                                    "end": 1653
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1654,
                                                                                    "end": 1659
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1634,
                                                                                "end": 1659
                                                                            },
                                                                            {
                                                                                "kind": 65721,
                                                                                "left": {
                                                                                    "kind": 196711,
                                                                                    "text": "configurable",
                                                                                    "rawText": "configurable",
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1660,
                                                                                    "end": 1681
                                                                                },
                                                                                "right": {
                                                                                    "kind": 4260391,
                                                                                    "text": true,
                                                                                    "flags": 32768,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 1682,
                                                                                    "end": 1687
                                                                                },
                                                                                "accessModifier": null,
                                                                                "decorators": null,
                                                                                "flags": 32768,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 1660,
                                                                                "end": 1687
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "multiline": true,
                                                                        "flags": 32768,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 1549,
                                                                        "end": 1687
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1547,
                                                                    "end": 1693
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "transformFlags": 0,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "start": 1506,
                                                            "end": 1694
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1469,
                                                        "end": 1694
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1443,
                                                    "end": 1695
                                                },
                                                {
                                                    "kind": 2097346,
                                                    "expression": {
                                                        "kind": 196712,
                                                        "text": "LanguageSpec_section_4_5_error_cases",
                                                        "rawText": "LanguageSpec_section_4_5_error_cases",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 1706,
                                                        "end": 1743
                                                    },
                                                    "flags": 32768,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 1695,
                                                    "end": 1744
                                                }
                                            ],
                                            "multiline": true,
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 651,
                                            "end": 1744
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 649,
                                        "end": 1746
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 638,
                                    "end": 1746
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 636,
                                "end": 1747
                            },
                            "typeArguments": null,
                            "argumentList": {
                                "kind": 3,
                                "elements": [],
                                "trailingComma": false,
                                "transformFlags": 0,
                                "flags": 0,
                                "intersects": false,
                                "start": 1749,
                                "end": 1749
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1747,
                            "end": 1749
                        },
                        "flags": 597,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1749
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 597,
                "end": 1749
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 543,
            "end": 1750
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1750
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

