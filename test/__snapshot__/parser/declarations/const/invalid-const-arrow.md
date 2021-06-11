# Kataw parser test case

## Input

`````js
const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "start": 5,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 261,
                                "arrowToken": null,
                                "parameters": [
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Object",
                                                "rawText": "Object",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 18
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 9,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "types": null,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 18
                                    },
                                    {
                                        "kind": 149,
                                        "ellipsisToken": null,
                                        "name": null,
                                        "optionalToken": null,
                                        "types": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "Object",
                                                "rawText": "Object",
                                                "flags": 96,
                                                "start": 19,
                                                "end": 26
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 26
                                        },
                                        "flags": 0,
                                        "start": 19,
                                        "end": 26
                                    }
                                ],
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 33
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 26,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 9,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 33
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 33
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 33
            },
            "flags": 33554448,
            "start": 0,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 64,
                        "start": 38,
                        "end": 43
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 43,
                        "end": 43
                    },
                    "flags": 32,
                    "start": 38,
                    "end": 43
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 43,
                    "end": 45
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 57,
                        "end": 60
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "o1",
                            "rawText": "o1",
                            "flags": 96,
                            "start": 47,
                            "end": 50
                        },
                        {
                            "kind": 134299649,
                            "text": "o2",
                            "rawText": "o2",
                            "flags": 96,
                            "start": 51,
                            "end": 54
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "o1",
                        "rawText": "o1",
                        "flags": 96,
                        "start": 60,
                        "end": 63
                    },
                    "flags": 32,
                    "start": 45,
                    "end": 63
                },
                "flags": 32,
                "start": 38,
                "end": 63
            },
            "flags": 16,
            "start": 38,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "const fn: ( Object, Object Object ) => void = ( o1, o2, ) => o1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 26, end: 33
✖ Missing initializer in const declaration - start: 33, end: 35
✖ ',' expected - start: 33, end: 35
✖ Expected a `;` - start: 33, end: 35
✖ Declaration or statement expected - start: 35, end: 38
✖ Identifier expected - start: 43, end: 45
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 43, end: 45

```

