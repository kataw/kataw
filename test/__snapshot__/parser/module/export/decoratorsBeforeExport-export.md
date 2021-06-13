# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
@decorator
export class Foo {}
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
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "decorator",
                            "rawText": "decorator",
                            "flags": 96,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 0,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 10,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 10,
                    "end": 10
                },
                "flags": 10,
                "start": 32,
                "end": 10
            },
            "flags": 17,
            "start": 0,
            "end": 10
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 10,
                "end": 17
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 17,
                    "end": 23
                },
                "name": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 23,
                    "end": 27
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [],
                        "flags": 32,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 27,
                    "start": 32,
                    "end": 30
                },
                "flags": 16,
                "start": 17,
                "end": 30
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 81,
            "start": 10,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "@decorator\nexport class Foo {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 10, end: 17

```

