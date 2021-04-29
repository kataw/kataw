# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
do function *f(){} while (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 26,
                "end": 27
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 18,
                "end": 24
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 2,
                    "end": 11
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 14,
                    "end": 16
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 18
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 272,
                "start": 2,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "source": "do function *f(){} while (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 2, end: 11

```

