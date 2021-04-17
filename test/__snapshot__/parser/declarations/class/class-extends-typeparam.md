# Kataw parser test case

## Input

`````js
class Foo<T> extends Bar<T> { }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 768,
                "start": 5,
                "end": 9
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 768,
                            "start": 10,
                            "end": 11
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 10,
                        "end": 11
                    }
                ],
                "flags": 0,
                "start": 9,
                "end": 12
            },
            "classHeritage": {
                "kind": 279,
                "extendsToken": {
                    "kind": 4194391,
                    "flags": 768,
                    "start": 12,
                    "end": 20
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Bar",
                    "rawText": "Bar",
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "typeParameter": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 768,
                                "start": 25,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 25,
                            "end": 26
                        }
                    ],
                    "flags": 0,
                    "start": 24,
                    "end": 27
                },
                "flags": 128,
                "start": 20,
                "end": 27
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 29,
                "end": 31
            },
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "class Foo<T> extends Bar<T> { }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

