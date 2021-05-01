# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
x@{x9}@+@{x9}@y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 2,
                "end": 2
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x9",
                "rawText": "x9",
                "flags": 96,
                "start": 3,
                "end": 5
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "start": 1,
            "end": 5
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 7,
                "end": 7
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 8,
                "end": 8
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 6,
            "end": 8
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 9,
                "end": 9
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x9",
                "rawText": "x9",
                "flags": 96,
                "start": 10,
                "end": 12
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 8,
                "end": 8
            },
            "flags": 16,
            "start": 8,
            "end": 12
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 0,
                        "start": 14,
                        "end": 15
                    }
                ],
                "flags": 32,
                "start": 14,
                "end": 15
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 15,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x@{x9}@+@{x9}@y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 5, end: 6
✖ Binding identifier expected - start: 8, end: 9
✖ Statement expected - start: 12, end: 13
✖ Binding identifier expected - start: 15, end: 15

```

