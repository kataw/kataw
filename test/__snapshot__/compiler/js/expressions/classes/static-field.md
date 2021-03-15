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
    "kind": 2243,
    "source": "class {\n\n      static field = foo;\n\n\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "field",
                            "rawText": "field",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 27
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 33
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 7,
                        "end": 34
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 7,
                "end": 38
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

```

