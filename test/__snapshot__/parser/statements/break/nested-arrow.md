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
                    "flags": 768,
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
                                                "flags": 768,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "label": null,
                                            "flags": 128,
                                            "start": 11,
                                            "end": 17
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 128,
                                    "start": 11,
                                    "end": 17
                                },
                                "flags": 128,
                                "start": 7,
                                "end": 19
                            }
                        ],
                        "multiline": false,
                        "flags": 256,
                        "start": 7,
                        "end": 19
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "() => {   { break }   }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 46,
            "error": "A 'break' statement can only be used within an enclosing iteration or switch statement.",
            "start": 17,
            "end": 19
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

