# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
if (x) ; else function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 168,
                "flags": 128,
                "start": 6,
                "end": 8
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 768,
                "start": 8,
                "end": 13
            },
            "alternate": {
                "kind": 176,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37814362,
                    "flags": 768,
                    "start": 13,
                    "end": 22
                },
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 24,
                    "end": 26
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 27,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 256,
                "start": 13,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "text": "if (x) ; else function f(){}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

