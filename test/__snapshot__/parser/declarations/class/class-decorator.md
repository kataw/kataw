# Kataw parser test case

## Input

`````js
@abc
class Foo {

}
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
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "abc",
                            "rawText": "abc",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 4
                    }
                ],
                "flags": 32,
                "start": 1,
                "end": 4
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 4,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "flags": 14,
                "start": 32,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "@abc\nclass Foo {\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

@abc
class Foo {}
```

### Diagnostics

```javascript
✔ No errors
```

