# Kataw parser test case

## Input

`````js
({ident: [foo, bar] += x})
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
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 8,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 8,
                                    "end": 24
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 24
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 25
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "({ident: [foo, bar] += x})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 19, end: 22

```

