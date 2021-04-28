# Kataw parser test case

## Input

`````js
function* bar() { yield class {} }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 13,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 17,
                                    "start": 0,
                                    "end": 23
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 189,
                                    "decorators": null,
                                    "classKeyword": {
                                        "kind": 37822544,
                                        "flags": 23,
                                        "start": 0,
                                        "end": 29
                                    },
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": null,
                                    "members": {
                                        "kind": 277,
                                        "elements": [],
                                        "flags": 256,
                                        "start": 31,
                                        "end": 32
                                    },
                                    "flags": 256,
                                    "start": 23,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 32
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 32
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 17,
                    "end": 32
                },
                "flags": 256,
                "start": 15,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "function* bar() { yield class {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

