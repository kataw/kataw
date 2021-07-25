# Kataw parser test case

## Input

`````js
async(x?);

(async(x?));
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
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 6,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 20
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 21
                                },
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 19,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 13,
                    "end": 22
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 10,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 10,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async(x?);\n\n(async(x?));",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 9, end: 10
✖ Expected '=>' - start: 22, end: 23

```

