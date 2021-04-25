# Kataw parser test case

## Input

`````js
class {

      static field = foo;


}
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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 5,
                "end": 5
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
                        "staticToken": {
                            "kind": 8388716,
                            "flags": 768,
                            "start": 7,
                            "end": 21
                        },
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "field",
                            "rawText": "field",
                            "flags": 768,
                            "start": 21,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 256,
                        "start": 21,
                        "end": 33
                    },
                    {
                        "kind": 281,
                        "flags": 768,
                        "start": 33,
                        "end": 34
                    }
                ],
                "flags": 256,
                "start": 7,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "class {\n\n      static field = foo;\n\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Binding identifier expected - start: 5, end: 7
@{x2716}@ Classes may not have a static property named 'prototype' - start: 27, end: 29

```

