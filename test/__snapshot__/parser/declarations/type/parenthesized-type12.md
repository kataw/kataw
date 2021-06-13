# Kataw parser test case

## Input

`````js
type X = (1<z>[]);
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
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
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
                "kind": 260,
                "type": {
                    "kind": 134217968,
                    "text": 1,
                    "flags": 2097216,
                    "start": 10,
                    "end": 11
                },
                "flags": 2097152,
                "start": 8,
                "end": 11
            },
            "flags": 2097152,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 11,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "start": 13,
                    "end": 14
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 11,
                "end": 16
            },
            "flags": 16,
            "start": 11,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 17,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type X = (1<z>[]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 11, end: 12
✖ Expected a `;` - start: 16, end: 17

```

