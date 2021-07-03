# Kataw parser test case

## Input

`````js
(class{}
 / foo / g)
`````

## Options

### Parser Options

`````js
{}
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 8
                },
                "flags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/ foo /",
                "flags": 96,
                "start": 8,
                "end": 17
            },
            "flags": 16,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "(class{}\n / foo / g)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 10, end: 17
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 19, end: 20

```

