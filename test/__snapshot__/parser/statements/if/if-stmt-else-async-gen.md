# Kataw parser test case

## Input

`````js
if (false) ; else async function* f() {  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 168,
                "flags": 16,
                "start": 10,
                "end": 12
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 12,
                "end": 17
            },
            "alternate": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 17,
                    "end": 23
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 0,
                    "start": 23,
                    "end": 32
                },
                "generatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 32,
                    "end": 33
                },
                "name": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 33,
                    "end": 35
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 35,
                    "end": 37
                },
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
                    "start": 37,
                    "end": 42
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 400,
                "start": 17,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "if (false) ; else async function* f() {  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Function declarations are not allowed in an arbitrary statement position. - start: 17, end: 23

```

