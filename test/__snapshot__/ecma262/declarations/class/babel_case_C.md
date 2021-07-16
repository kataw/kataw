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
                        "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 8
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/ foo /",
                "rawText": "/ foo /",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "(class{}\n / foo / g)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ '; ' expected - start: 17, end: 19
✖ '; ' expected - start: 19, end: 20

```

