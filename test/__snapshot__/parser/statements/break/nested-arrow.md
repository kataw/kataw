# Kataw parser test case

## Input

`````js
() => {   { break }   }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 150,
                                            "breakKeyword": {
                                                "kind": 37757005,
                                                "flags": 0,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "label": null,
                                            "flags": 16,
                                            "start": 11,
                                            "end": 17
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 16,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 16,
                                "start": 7,
                                "end": 19
                            }
                        ],
                        "multiline": false,
                        "flags": 32,
                        "start": 7,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "() => {   { break }   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 17, end: 19

```

