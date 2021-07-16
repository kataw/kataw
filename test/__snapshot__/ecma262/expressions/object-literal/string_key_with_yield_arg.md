# Kataw parser test case

## Input

`````js
s = {"foo": yield /x/}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "operatorToken": {
                                            "kind": 35640,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 5,
                                        "end": 20
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 5,
                                    "end": 21
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 5,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 21
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "s = {\"foo\": yield /x/}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 21, end: 22

```

