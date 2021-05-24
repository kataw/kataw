# Kataw parser test case

## Input

`````js
type T = Array<(string) => number>
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
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 96,
                    "start": 8,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 23
                        }
                    ],
                    "flags": 0,
                    "start": 14,
                    "end": 23
                },
                "flags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 26,
                    "end": 33
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 33,
                    "end": 34
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 26,
                "end": 34
            },
            "flags": 16,
            "start": 26,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type T = Array<(string) => number>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 23, end: 26
✖ Expression expected - start: 34, end: 34

```

