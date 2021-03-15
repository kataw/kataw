# Kataw parser test case

## Input

`````js
class A {
  public #a;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A {\n  public #a;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 131252,
                            "text": "#a",
                            "rawText": "#a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 524288,
                            "start": 18,
                            "end": 21
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 18
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 9,
                        "end": 22
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 24
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 24
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
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

