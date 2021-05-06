# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
left@{xa0}@right
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
                "text": "xa0",
                "rawText": "xa0",
                "flags": 96,
                "start": 6,
                "end": 9
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
            "end": 9
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
                            "start": 11,
                            "end": 16
                        },
                        "flags": 0,
                        "start": 11,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 11,
                "end": 16
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 16,
                "end": 16
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 10,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "left@{xa0}@right",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 9, end: 10
✖ Binding identifier expected - start: 16, end: 16

```

