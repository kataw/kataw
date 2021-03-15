# Kataw parser test case

## Input

`````js
abstract class A {
  abstract #a;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class A {\n  abstract #a;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 14,
                "end": 16
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
                            "intersects": false,
                            "transformFlags": 524288,
                            "start": 29,
                            "end": 32
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 18,
                        "end": 33
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 18,
                "end": 35
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870912,
            "intersects": false,
            "transformFlags": 2097153,
            "start": 8,
            "end": 35
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

