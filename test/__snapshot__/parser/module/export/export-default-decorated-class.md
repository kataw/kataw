# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default
@bar class Foo { }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": {
                    "kind": 207,
                    "elements": [
                        {
                            "kind": 34611453,
                            "decoratorToken": {
                                "kind": 34611453,
                                "flags": 65,
                                "start": 14,
                                "end": 16
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 19
                },
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 14,
                    "end": 25
                },
                "name": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 25,
                    "end": 29
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 29,
                    "start": 32,
                    "end": 33
                },
                "flags": 16,
                "start": 14,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "export default\n@bar class Foo { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

export default @bar
class Foo {};
```

### Diagnostics

```javascript
✔ No errors
```

