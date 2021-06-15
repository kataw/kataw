# Kataw parser test case

## Input

`````js
(a: number = 0) => {}

(x, a: number = 0) => {}
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
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 15,
                        "end": 18
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 3,
                                    "end": 10
                                },
                                "flags": 2097152,
                                "start": 3,
                                "end": 10
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 21
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 24,
                            "end": 25
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 24,
                    "end": 28
                },
                "flags": 268435489,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 29,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 38,
                    "end": 40
                },
                "flags": 32,
                "start": 29,
                "end": 40
            },
            "flags": 16,
            "start": 29,
            "end": 40
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 46,
                "end": 46
            },
            "flags": 16,
            "start": 44,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(a: number = 0) => {}\n\n(x, a: number = 0) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 28, end: 29
✖ Expected a `;` - start: 40, end: 41
✖ Declaration or statement expected - start: 41, end: 44

```

