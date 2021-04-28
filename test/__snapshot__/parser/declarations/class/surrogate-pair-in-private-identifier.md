# Kataw parser test case

## Input

`````js
class C { #@{x29e3d}@ }
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#",
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 256,
                "start": 12,
                "end": 12
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x29e3d",
                "rawText": "x29e3d",
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 11,
                "end": 11
            },
            "flags": 128,
            "start": 11,
            "end": 19
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 256,
                "start": 21,
                "end": 21
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 23,
                "end": 23
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 20,
                "end": 20
            },
            "flags": 128,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "class C { #@{x29e3d}@ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 9, end: 11
✖ Statement expected - start: 19, end: 20
✖ Binding identifier expected - start: 23, end: 23

```

