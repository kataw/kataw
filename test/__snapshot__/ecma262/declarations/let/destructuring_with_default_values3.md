# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
let {p:{q=0,...o}={r:0}} = {p:{r:""}}
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "q",
                                                            "rawText": "q",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 8,
                                                            "end": 9
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 11
                                                        },
                                                        "flags": 0,
                                                        "transformFlags": 4096,
                                                        "start": 8,
                                                        "end": 11
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": {
                                                            "kind": 524302,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 12,
                                                            "end": 15
                                                        },
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "o",
                                                            "rawText": "o",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "right": null,
                                                        "flags": 0,
                                                        "transformFlags": 4096,
                                                        "start": 12,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 17
                                        },
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
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 0,
                                                            "rawText": "0",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 22
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 19,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 22
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 18,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 24
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
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 29
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
                                                            "kind": 134299649,
                                                            "text": "r",
                                                            "rawText": "r",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 31,
                                                            "end": 32
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "",
                                                            "rawText": "\"\"",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 31,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 35
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 30,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 28,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 36
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 26,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 37
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "let {p:{q=0,...o}={r:0}} = {p:{r:\"\"}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
let { p: { q = 0, ...o } = { r: 0 } } = { p: { r: "\"\"" } };
```

### Diagnostics

```javascript
✔ No errors
```

