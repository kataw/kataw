# Kataw parser test case

## Input

`````js
async function f(){
  for await ((x)=>{} of y);
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
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": " f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "flags": 1,
                                "start": 19,
                                "end": 25
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 40,
                                "end": 43
                            },
                            "initializer": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "original": "x",
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 35
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "y",
                                "text": "y",
                                "rawText": " y",
                                "flags": 96,
                                "start": 43,
                                "end": 45
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 46,
                                "end": 47
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 47
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 47
                },
                "flags": 32,
                "start": 18,
                "end": 49
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await ((x)=>{} of y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-of loop - start: 43, end: 45

```

