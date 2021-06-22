# Kataw parser test case

## Input

`````js
var a?: number[][]
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 130,
                    "member": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 96,
                        "start": 7,
                        "end": 14
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 536870944,
                    "start": 7,
                    "end": 16
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 17,
                    "end": 17
                },
                "flags": 536870944,
                "start": 7,
                "end": 18
            },
            "flags": 16,
            "start": 7,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "var a?: number[][]",
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
✖ ',' expected - start: 5, end: 6
✖ Expected a `;` - start: 5, end: 6
✖ Declaration or statement expected - start: 6, end: 7
✖ An member access expression should take an argument. - start: 7, end: 16
✖ Identifier expected - start: 15, end: 16
✖ An member access expression should take an argument. - start: 7, end: 18
✖ Identifier expected - start: 17, end: 18

```

