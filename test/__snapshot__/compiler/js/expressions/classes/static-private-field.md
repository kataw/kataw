# Kataw parser test case

## Input

`````js
class A {
  static #private; }

  class A {
  static #private = x; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A {\n  static #private; }\n\n  class A {\n  static #private = x; }",
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
                            "text": "#private",
                            "rawText": "#private",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 524288,
                            "start": 18,
                            "end": 27
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
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 9,
                        "end": 28
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 30
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 30
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 39,
                "end": 41
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
                            "text": "#private",
                            "rawText": "#private",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 524288,
                            "start": 52,
                            "end": 61
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 65
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": true,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 43,
                        "end": 66
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 43,
                "end": 68
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 30,
            "end": 68
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
    "end": 68
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

