# Kataw parser test case

## Input

`````js
class x { constructor(){}; \u0063onstructor(){}; }
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 9,
                                "end": 21
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 16384,
                                "start": 22,
                                "end": 23
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 16384,
                            "start": 21,
                            "end": 25
                        },
                        "flags": 16384,
                        "start": 9,
                        "end": 25
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 25,
                        "end": 26
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 768,
                                "start": 26,
                                "end": 43
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 16384,
                                "start": 44,
                                "end": 45
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 256,
                                "start": 45,
                                "end": 47
                            },
                            "flags": 16384,
                            "start": 43,
                            "end": 47
                        },
                        "flags": 16384,
                        "start": 26,
                        "end": 47
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 47,
                        "end": 48
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 50
            },
            "flags": 128,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "class x { constructor(){}; \\u0063onstructor(){}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Multiple constructor implementations are not allowed - start: 47, end: 48

```

