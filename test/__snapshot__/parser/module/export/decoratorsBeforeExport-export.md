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
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "decorator",
                            "rawText": "decorator",
                            "flags": 96,
                            "start": 1,
                            "end": 10
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 10
                    }
                ],
                "flags": 32,
                "start": 1,
                "end": 10
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
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
                                "kind": 134299649,
                                "text": "class",
                                "rawText": "class",
                                "flags": 96,
                                "start": 17,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 17,
                            "end": 23
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "Foo",
                                "rawText": "Foo",
                                "flags": 96,
                                "start": 23,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 23,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 27
                },
                "flags": 17,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 29,
                "end": 29
            },
            "flags": 16,
            "start": 27,
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
✖ Binding identifier expected - start: 17, end: 23
✖ Expression expected - start: 27, end: 29

```

