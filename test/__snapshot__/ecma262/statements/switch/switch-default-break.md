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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
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
                            "flags": 80,
                            "start": 11,
                            "end": 19
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 19,
                            "end": 20
                        },
                        "statements": [
                            {
                                "kind": 176,
                                "declareKeyword": null,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 29
                                },
                                "asteriskToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
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
                                                    "flags": 80,
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
            "flags": 80,
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

```

### Diagnostics

```javascript
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 40, end: 41

```

