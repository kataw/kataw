# Kataw parser test case

## Input

`````js
class C { #constructor }

class C { static #constructor }
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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#constructor",
                                "flags": 96,
                                "start": 9,
                                "end": 22
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 22
                },
                "flags": 32,
                "start": 7,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 24,
                "end": 31
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 35,
                                "end": 42
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#constructor",
                                "flags": 96,
                                "start": 42,
                                "end": 55
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 42,
                            "end": 55
                        }
                    ],
                    "flags": 32,
                    "start": 35,
                    "end": 55
                },
                "flags": 32,
                "start": 33,
                "end": 57
            },
            "flags": 16,
            "start": 24,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "class C { #constructor }\n\nclass C { static #constructor }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '#constructor' is a reserved word. - start: 9, end: 11
✖ Cannot redeclare block-scoped variable - start: 31, end: 33
✖ '#constructor' is a reserved word. - start: 42, end: 44

```

