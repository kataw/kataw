# Kataw parser test case

## Input

`````js
({web: true,  __proto__: x, __proto__: y});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "web",
                                    "rawText": "web",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 11
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 23
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 12,
                                "end": 26
                            },
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 36,
                                "transformFlags": 128,
                                "start": 27,
                                "end": 40
                            }
                        ],
                        "trailingComma": false,
                        "flags": 20,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 40
                    },
                    "flags": 52,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 41
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "({web: true,  __proto__: x, __proto__: y});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 41, end: 42

```

