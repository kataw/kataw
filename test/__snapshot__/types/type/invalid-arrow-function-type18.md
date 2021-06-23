# Kataw parser test case

## Input

`````js
type x = (([1]: y) => T);
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 290,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 147,
                            "elementTypes": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134217968,
                                        "text": 1,
                                        "flags": 2097216,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 11,
                            "end": 14
                        },
                        "flags": 2097152,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 14
                },
                "flags": 2097152,
                "start": 8,
                "end": 14
            },
            "flags": 64,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "start": 21,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 24,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type x = (([1]: y) => T);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 14, end: 15
✖ Expected a `;` - start: 17, end: 18
✖ Declaration or statement expected - start: 18, end: 21
✖ Expected a `;` - start: 23, end: 24

```

