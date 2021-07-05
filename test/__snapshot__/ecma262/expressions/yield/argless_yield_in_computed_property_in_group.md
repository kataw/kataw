# Kataw parser test case

## Input

`````js
{ (x = {[yield]: 1}) }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 4,
                                    "end": 6
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
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "start": 9,
                                                        "end": 14
                                                    },
                                                    "flags": 32,
                                                    "start": 8,
                                                    "end": 15
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 18
                                                },
                                                "flags": 32,
                                                "start": 8,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 8,
                                        "end": 18
                                    },
                                    "flags": 48,
                                    "start": 6,
                                    "end": 19
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 19
                            },
                            "flags": 1,
                            "start": 34,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ (x = {[yield]: 1}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

{
  (x = {[yield]: 1});
}
```

### Diagnostics

```javascript
✔ No errors
```

