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

### Hybrid CST

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
                    "flags": 6,
                    "start": 0,
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
                                "flags": 768,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 128,
                            "start": 10,
                            "end": 14
                        },
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 768,
                                "start": 15,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 128,
                            "start": 15,
                            "end": 19
                        }
                    ],
                    "flags": 128,
                    "start": 10,
                    "end": 19
                },
                "flags": 128,
                "start": 6,
                "end": 20
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "export var foo, bar;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

