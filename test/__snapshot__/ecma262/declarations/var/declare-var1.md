# Kataw parser test case

## Input

`````js
declare var foo;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 7,
                "end": 11
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
                            "start": 11,
                            "end": 15
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 15
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 15
            },
            "flags": 4112,
            "start": 7,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "declare var foo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

var  foo ;

```

### Diagnostics

```javascript
✔ No errors
```

