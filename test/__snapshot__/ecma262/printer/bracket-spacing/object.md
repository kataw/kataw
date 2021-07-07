# Kataw parser test case

## Input

`````js
const obj1 = {a:1, b:2, c:3}
const obj2 = { a:1, b:2, c:3 };

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
                "transformFlags": 0,
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
                            "text": "obj1",
                            "rawText": "obj1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 14,
                                        "end": 17
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 18,
                                        "end": 22
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 23,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 27
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 12,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 28
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 28
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 28,
                "end": 34
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj2",
                            "rawText": "obj2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 39
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 43,
                                        "end": 47
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 52
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 48,
                                        "end": 52
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 55
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 56,
                                            "end": 57
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 53,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 57
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 41,
                            "end": 59
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 34,
                        "end": 59
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 34,
                "end": 59
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 28,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "const obj1 = {a:1, b:2, c:3}\nconst obj2 = { a:1, b:2, c:3 };\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

```

### Diagnostics

```javascript
✔ No errors
```

