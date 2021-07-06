# Kataw parser test case

## Input

`````js
async?.({ __proto__: x, __proto__: y })
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "member": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "__proto__",
                                                    "rawText": "__proto__",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 19
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 22
                                                },
                                                "flags": 36,
                                                "transformFlags": 128,
                                                "start": 9,
                                                "end": 22
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
                                                    "start": 23,
                                                    "end": 33
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                "flags": 36,
                                                "transformFlags": 128,
                                                "start": 23,
                                                "end": 36
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 20,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 36
                                    },
                                    "flags": 52,
                                    "transformFlags": 8,
                                    "start": 8,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 38
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 7,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "async?.({ __proto__: x, __proto__: y })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An object literal cannot have multiple properties with the name '__proto__' - start: 38, end: 39

```

