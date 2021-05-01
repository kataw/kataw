# Kataw parser test case

## Input

`````js
switch(0) { default: function f(){ break; } }
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 7,
                "end": 8
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 11,
                            "end": 19
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 29
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": " f",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 31,
                                    "end": 33
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 150,
                                                "breakKeyword": {
                                                    "kind": 37757005,
                                                    "flags": 0,
                                                    "start": 34,
                                                    "end": 40
                                                },
                                                "label": null,
                                                "flags": 16,
                                                "start": 34,
                                                "end": 41
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 34,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 16,
                                "start": 20,
                                "end": 43
                            }
                        ],
                        "flags": 16,
                        "start": 11,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 45
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "switch(0) { default: function f(){ break; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 40, end: 41

```

