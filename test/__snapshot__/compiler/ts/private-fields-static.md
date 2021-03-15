# Kataw parser test case

## Input

`````js
class A {
  static #x;
  static #y: string;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A {\n  static #x;\n  static #y: string;\n}",
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
                            "text": "#x",
                            "rawText": "#x",
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
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 9,
                        "end": 22
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 131252,
                            "text": "#y",
                            "rawText": "#y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 524288,
                            "start": 31,
                            "end": 34
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 35,
                            "end": 42
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 22,
                        "end": 43
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 45
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 45
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
    "end": 45
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

