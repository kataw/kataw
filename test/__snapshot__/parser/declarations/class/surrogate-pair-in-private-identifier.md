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

### CST

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
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67174651,
                            "text": "#",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 12,
                "end": 12
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x29e3d",
                "rawText": "x29e3d",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "start": 11,
            "end": 19
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [],
                "flags": 32,
                "start": 21,
                "end": 21
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 23,
                "end": 23
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 20,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class C { #@{x29e3d}@ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 10, end: 11
✖ The parser expected to find a '}' to match the '{' token here - start: 11, end: 12
✖ Declaration or statement expected - start: 19, end: 20
✖ Binding identifier expected - start: 23, end: 23

```

