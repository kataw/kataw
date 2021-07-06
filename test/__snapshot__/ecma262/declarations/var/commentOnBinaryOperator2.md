# Kataw parser test case

## Input

`````js
var a = 'some'
    // comment
    + 'text';

var b = 'some'
    /* comment */
    + 'text';

var c = 'some'
    /* comment */
    + /*comment1*/
    'text';
`````

## Options

### Parser Options

`````js
{allowTypes: true}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392131,
                                "text": "some",
                                "rawText": "'some'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 35
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "text",
                                "rawText": "'text'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 42
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 7,
                            "end": 42
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 43,
                "end": 48
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 50
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392131,
                                "text": "some",
                                "rawText": "'some'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 59
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 83
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "text",
                                "rawText": "'text'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 83,
                                "end": 90
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 52,
                            "end": 90
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 48,
                        "end": 90
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 48,
                "end": 90
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 91
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "transformFlags": 0,
                "start": 91,
                "end": 96
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 96,
                            "end": 98
                        },
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 201392131,
                                "text": "some",
                                "rawText": "'some'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 107
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 107,
                                "end": 131
                            },
                            "right": {
                                "kind": 201392131,
                                "text": "text",
                                "rawText": "'text'",
                                "flags": 4194401,
                                "transformFlags": 0,
                                "start": 131,
                                "end": 155
                            },
                            "flags": 4194401,
                            "transformFlags": 1024,
                            "start": 100,
                            "end": 155
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 96,
                        "end": 155
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 96,
                "end": 155
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 91,
            "end": 156
        }
    ],
    "isModule": false,
    "source": "var a = 'some'\n    // comment\n    + 'text';\n\nvar b = 'some'\n    /* comment */\n    + 'text';\n\nvar c = 'some'\n    /* comment */\n    + /*comment1*/\n    'text';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 156
}
```

### Printed

```javascript
var a = "'some'" + "'text'";
var b = "'some'" + "'text'";

var c = "'some'" + "'text'";

```

### Diagnostics

```javascript
✔ No errors
```

