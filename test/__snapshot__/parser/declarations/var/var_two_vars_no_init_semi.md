# Kataw parser test case

## Input

`````js
export var foo, bar;
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 0,
                    "start": 6,
                    "end": 10
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 10,
                            "end": 14
                        },
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 15,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 19
                },
                "flags": 16,
                "start": 6,
                "end": 20
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "export var foo, bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

