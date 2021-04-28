# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
async function* f() {
    for await (import.meta of null) ;
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
                "end": 14
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 14,
                "start": 512,
                "end": 15
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 15,
                "end": 17
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 17,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 21,
                                "start": 1,
                                "end": 29
                            },
                            "initializer": {
                                "kind": 120,
                                "expression": {
                                    "kind": 207,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 37,
                                        "start": 0,
                                        "end": 43
                                    },
                                    "flags": 43,
                                    "start": 768,
                                    "end": 48
                                },
                                "flags": 128,
                                "start": 43,
                                "end": 48
                            },
                            "expression": {
                                "kind": 269,
                                "text": null,
                                "flags": 768,
                                "start": 51,
                                "end": 56
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 128,
                                "start": 57,
                                "end": 59
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 29,
                                "start": 512,
                                "end": 35
                            },
                            "flags": 128,
                            "start": 21,
                            "end": 59
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 21,
                    "end": 59
                },
                "flags": 256,
                "start": 19,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 3200,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": true,
    "text": "async function* f() {\n    for await (import.meta of null) ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-of loop - start: 51, end: 56

```

