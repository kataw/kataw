# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
function f() {
  new.target = 1;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
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
                                "kind": 125,
                                "left": {
                                    "kind": 211,
                                    "name": {
                                        "kind": 81921,
                                        "text": "target",
                                        "rawText": "target",
                                        "flags": 768,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "flags": 768,
                                    "start": 14,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 31
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 32
                },
                "flags": 256,
                "start": 12,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": true,
    "text": "function f() {\n  new.target = 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

```

