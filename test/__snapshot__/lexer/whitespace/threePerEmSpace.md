# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left@{x2004}@right
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
                "text": "left",
                "rawText": "left",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 5,
                "end": 5
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x2004",
                "rawText": "x2004",
                "flags": 96,
                "start": 6,
                "end": 11
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 4,
                "end": 4
            },
            "flags": 16,
            "start": 4,
            "end": 11
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
                            "text": "right",
                            "rawText": "right",
                            "flags": 96,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 0,
                        "start": 13,
                        "end": 18
                    }
                ],
                "flags": 32,
                "start": 13,
                "end": 18
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 18,
                "end": 18
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "start": 12,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "left@{x2004}@right",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 11, end: 12
✖ Binding identifier expected - start: 18, end: 18

```

